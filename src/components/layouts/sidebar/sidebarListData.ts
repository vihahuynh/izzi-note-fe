import { IconType } from 'react-icons';
import { AiOutlineBell } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  MdOutlineLabel,
  MdOutlineModeEditOutline,
  MdLightbulbOutline,
  MdOutlineArchive,
} from 'react-icons/md';

export interface ISidebarItem {
  id: string;
  text: string;
  icon: IconType;
}

export const sidebarList: ISidebarItem[] = [
  {
    id: 'notes',
    text: 'Notes',
    icon: MdLightbulbOutline,
  },
  {
    id: 'reminders',
    text: 'Reminders',
    icon: AiOutlineBell,
  },
  {
    id: 'labels',
    text: 'Labels',
    icon: MdOutlineLabel,
  },
  {
    id: 'archive',
    text: 'Archive',
    icon: MdOutlineArchive,
  },
  {
    id: 'edit-labels',
    text: 'Edit labels',
    icon: MdOutlineModeEditOutline,
  },
  {
    id: 'trash',
    text: 'Trash',
    icon: FaRegTrashAlt,
  },
];
