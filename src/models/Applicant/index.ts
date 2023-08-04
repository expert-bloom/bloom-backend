import {
  type Document,
  model,
  type Model,
  models,
  Schema,
  type Types,
} from 'mongoose';

export interface IApplicant<TJobPost = string> {
  savedJobs: TJobPost[];
  jobApplication: TJobPost[];
  introAudio?: string;
  experienceYear: number;
  resume?: string;
  workExperience?: [
    {
      companyName: string;
      year: string;
      role: string;
      accomplishment: string;
    },
  ];
}

interface ApplicantDocument<TJobPost = Types.ObjectId>
  extends IApplicant<TJobPost>,
    Document {
  // any type correction here
  savedJobs: Types.Array<TJobPost>;
}

export interface ApplicantModel extends Model<ApplicantDocument> {
  // any static methods here
}

const ApplicantSchema = new Schema<ApplicantDocument, ApplicantModel>({
  introAudio: String,
  resume: String,
  experienceYear: Number,

  savedJobs: {
    type: [Schema.Types.ObjectId],
    ref: 'Job',
    default: [],
  },
  workExperience: [
    {
      companyName: String,
      year: String,
      role: String,
      accomplishment: String,
    },
  ],
});

const Applicant =
  (models.Applicant as ApplicantModel) ??
  (model('Applicant', ApplicantSchema) as ApplicantModel);
export default Applicant;
