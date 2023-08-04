import {
  type Document,
  model,
  type Model,
  models,
  Schema,
  type Types,
} from 'mongoose';

// for model creation typing
export interface ICompany<TJobPost = string> {
  companyName: string;
  logo: string;
  employee: string[];
  jobPost: TJobPost[];
}

interface CompanyBaseDocument<TJobPost = Types.ObjectId>
  extends ICompany<TJobPost>,
    Document {
  // type correction (mapping to mongoose types) here
  // methods, virtual here
  employee: Types.Array<string>;
}

interface CompanyDocument extends CompanyBaseDocument, Document {
  // any type correction here
  jobPost: Types.Array<Types.ObjectId>;
}

export interface CompanyModel extends Model<CompanyDocument> {
  // any static methods here
  getCompany: (id: string) => Promise<CompanyDocument>;
}

const CompanySchema = new Schema<CompanyDocument, CompanyModel>({
  companyName: {
    type: String, // unique: true, todo: uncomment this
    required: true,
  },

  logo: String,

  jobPost: {
    type: [Schema.Types.ObjectId],
    ref: 'Job',
  },
});

// export default (models.Company as CompanyModel) ??
//   (model('Company', CompanySchema) as CompanyModel);

const Company =
  (models.Company as CompanyModel) ??
  (model('Company', CompanySchema) as CompanyModel);
export default Company;
