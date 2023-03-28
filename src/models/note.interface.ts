import ILabel from './label.interface';
import { IUser } from './user.interface';

export interface INote {
  id: string;
  title: string;
  content: string;
  isPinned: boolean;
  isArchived: boolean;
  isCheckBox: boolean;
  isDeleted: boolean;
  deletedAt: Date;
  color: string;
  backgroundImage: string;
  collaborators: IUser[];
  labels: ILabel[];
  owner: string;
}
