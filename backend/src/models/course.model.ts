import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../utils/db";

export interface CourseAttributes {
  id: string;
  title: string;
  description?: string;
  rating: number;
  reviews: string;
  bestSeller: boolean;
  instructorId: string;
  price: string;
  imgUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CourseCreationAttributes
  extends Optional<CourseAttributes, "id" | "createdAt" | "updatedAt"> {}

class Course
  extends Model<CourseAttributes, CourseCreationAttributes>
  implements CourseAttributes
{
  public id!: string;
  public title!: string;
  public description?: string;
  public rating!: number;
  public bestSeller!: boolean;
  public imgUrl!: string;
  public price!: string;
  public reviews!: string;
  public instructorId!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Course.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
    },
    bestSeller: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    instructorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    reviews: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "courses",
    timestamps: true,
  }
);

export default Course;
