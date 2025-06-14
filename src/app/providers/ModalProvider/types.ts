import { IModalTypes } from '../../../shared/types'

export interface ModalContextTypes {
  isOpen:  boolean,
  openHandler: ((type: IModalTypes) => void),
  closeHandler: (() => void),
  toggleHandler: ((type: IModalTypes) => void),
}
