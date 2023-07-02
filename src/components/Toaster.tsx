import React, { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {
  DialogType,
  usePopup,
  ToastPosition,
} from 'react-custom-popup';
import { resetState } from '../store/globalToasts'
import { RootState } from 'src/store';

export const Toaster = () => {
  const dispatch = useDispatch()
  const { status, message, type } = useSelector((state: RootState) => state.globalToasts)
  const { showToast } = usePopup();
  const messages = { create: 'created successfully', update: 'updated successfully', delete: 'deleted successfully', error: 'something went wrong' }
  const toastShow = (toastType: DialogType, message: string) => {
    showToast({
      text: message ?? messages[type as keyof typeof messages],
      type: toastType,
      position: ToastPosition.BOTTOM_RIGHT,
      timeoutDuration: 5000
    })
  }
  useEffect(() => {
    const toastType = type === 'error' ? DialogType.DANGER : DialogType.INFO;
    type && toastShow(toastType, message)
    dispatch(resetState())
  }, [status])
  return <></>
}



export default (Toaster)