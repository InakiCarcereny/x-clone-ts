'use client';

import { Cross } from '@/icons/Cross';
import { useModalStore } from '@/store/modal-store';
import { Form } from '@/components/global/Form';
import editProfileSchema from '@/schemas/edit-profile';
import { EDIT_PROFILE_INPUTS } from '@/lib/edit-profile-inputs';

export function EditProfileModal() {
  const { isOpen, type, closeModal } = useModalStore();

  return (
    <>
      {isOpen && type === 'edit-profile' && (
        <div className='flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-cyan-500/20'>
          <div className='flex flex-col bg-black rounded-xl w-[550px] h-[750px] '>
            <header className='flex items-center justify-between w-full px-4 py-2'>
              <div className='flex items-center gap-x-4'>
                <button
                  onClick={closeModal}
                  className='rounded-full px-1 py-1 hover:bg-white/10 cursor-pointer'
                >
                  <Cross className='text-white' />
                </button>

                <h2 className='text-white text-2xl font-semibold'>
                  Edit Profile
                </h2>
              </div>
            </header>

            <Form schema={editProfileSchema} fields={EDIT_PROFILE_INPUTS} />
          </div>
        </div>
      )}
    </>
  );
}
