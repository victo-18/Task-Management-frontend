import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { TaskForm } from '../Types/uptaskTypes';
import { useForm } from 'react-hook-form';
import  FormTask from '../components/FormTask'
type EditTaskModalProps={
  data:TaskForm,
}
export default function EditTaskModal({data}:EditTaskModalProps) {
  const navegate= useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TaskForm>({
    defaultValues: {
      name: data.name,
      description: data.description
    }
  });
  const handleEditTask = (formatData: TaskForm) => {
    console.log(formatData);
    // Aquí puedes agregar la lógica para editar la tarea, por ejemplo enviar a una API
  }
    return (
        <Transition appear show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() =>navegate( location.pathname,{replace:true}) }>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                                <Dialog.Title
                                    as="h3"
                                    className="font-black text-4xl  my-5"
                                >
                                    Editar Tarea
                                </Dialog.Title>

                                <p className="text-xl font-bold">Realiza cambios a una tarea en {''}
                                    <span className="text-fuchsia-600">este formulario</span>
                                <form
                                    className="mt-10 space-y-3"
                                    noValidate
                                    onSubmit={handleSubmit(handleEditTask)}
                                >
                                    <div>
                                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                      <input
                                        id="name"
                                        type="text"
                                        {...register('name', { required: 'El nombre es requerido' })}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                      />
                                      {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                                    </div>
                                    <div>
                                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                                      <textarea
                                        id="description"
                                        {...register('description', { required: 'La descripción es requerida' })}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                      />
                                      {errors.description && <span className="text-red-600 text-sm">{errors.description.message}</span>}
                                    </div>
                                    <input
                                        type="submit"
                                        className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
                                        value='Guardar Tarea'
                                    />
                                    {/* <FormTask register={register} errors ={errors}/> */}
                                </form>
                            </p>
                                
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}