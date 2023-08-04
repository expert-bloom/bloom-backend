import { type Model, model, models, Schema, type Types } from 'mongoose';

export interface IJobPost {
  title: string;
  description: string;
  company: Types.ObjectId;
  email: string;
  jobCategory: string[];
  jobType: string;
  jobExperience: number;
  jobVacancy: number;
  jobDeadline: Date;
  salary: number[];
  isVisible: boolean;
  status: 'active' | 'draft' | 'inactive';
  type: 'onsite' | 'remote' | 'hybrid';
  jobSkills: string[];
  englishLevel: 'basic' | 'conversational' | 'fluent' | 'native';
  otherLanguages: string[];
  compensation: 'hourly' | 'monthly' | 'contractual';
}

interface MethodAndOverrides {
  // override
  jobCategory: Types.Array<string>;
  jobSkills: Types.Array<string>;
  otherLanguages: Types.Array<string>;
  salary: Types.Array<number>;
}

export interface JobPostModel extends Model<IJobPost, {}, MethodAndOverrides> {
  // statics
}

const JobSchema = new Schema<IJobPost, JobPostModel, MethodAndOverrides>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    jobCategory: {
      type: [String],
      required: true,
    },
    jobType: {
      type: String,
      required: true,
      trim: true,
    },
    jobExperience: {
      type: Number,
      required: true,
    },
    jobVacancy: {
      type: Number,
      required: true,
      min: 0,
    },
    jobDeadline: {
      type: Date,
      required: true,
    },
    salary: {
      type: [Number, Number],
      required: true,
      validate: {
        message: 'Salary must be positive and follow [min, max] format',
        validator: function (values: number[]) {
          return values.length === 2 && values[0] <= values[1];
        },
      },
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['active', 'draft', 'inactive'],
      default: 'active',
    },
    type: {
      type: String,
      enum: ['onsite', 'remote', 'hybrid'],
      default: 'onsite',
    },
    jobSkills: {
      type: [String],
      required: true,
    },
    englishLevel: {
      type: String,
      enum: ['basic', 'conversational', 'fluent', 'native'],
      default: 'basic',
    },
    otherLanguages: {
      type: [String],
    },
    compensation: {
      type: String,
      enum: ['hourly', 'monthly', 'contractual'],
      required: true,
    },
  },
  { timestamps: true },
);

JobSchema.pre('save', function (): void {
  console.log(this.title); // TypeScript knows that `this` is a `mongoose.Document & User` by default
});

export default (models.JobPost as JobPostModel) ??
  model<IJobPost, JobPostModel>('JobPost', JobSchema);
