import ILabel from './label.interface';
import { IUser } from './user.interface';

type Color =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'darkblue'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'gray';

type BackgroundImage =
  | 'groceries'
  | 'food'
  | 'music'
  | 'recipes'
  | 'notes'
  | 'places'
  | 'travel'
  | 'video'
  | 'celebration';

export interface INote {
  id: string;
  title: string;
  content: string;
  isPinned: boolean;
  isArchived: boolean;
  isCheckBox: boolean;
  isDeleted: boolean;
  deletedAt: Date;
  color: Color;
  backgroundImage: BackgroundImage;
  collaborators: IUser[];
  labels: ILabel[];
  owner: string;
}
