import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import FormTask from "../components/FormTask";
import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { createTask } from "../routers/taskRouterAPI";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function AddTaskModal() {
  const params = useParams();
  const location = useLocation();
  const navegate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const newTask = queryParams.get("newTask");
  const showModal = newTask ? true : false;
  type TaskForm = {
    name: string;
    description: string;
  };
  //Definiendo las variables iniciales para el formulario
  const initialValues: TaskForm = {
    name: "",
    description: "",
  };
  //Utilizando react hook form para el manejo del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm({ defaultValues: initialValues });
//Invalidando query para que se actualice la lista de tareas
const queryClient= useQueryClient()
  //Utilizando mutaciones para el llamado a la
  const { mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: (data) => {
      const projectId = params.projectId; // Extract projectId from params
      queryClient.invalidateQueries({queryKey:["editProjects", projectId]})
      toast.success(data.message, {
        theme: "dark",
      });
       reset();
      navegate(location.pathname, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message, {
        theme: "dark",
      });
    },
  });
  
  const handleData = (formData: TaskForm) => {
    if (!params.projectId) {
      toast.error("Project ID is missing", { theme: "dark" });
      return;
    }
    const task = { formData, projectId: params.projectId };
    mutate(task);
  };
  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => navegate(location.pathname, { replace: true })}
        >
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
                  <Dialog.Title as="h3" className="font-black text-4xl  my-5">
                    New Task
                  </Dialog.Title>

                  <p className="text-xl font-bold">
                    {" "}
                    Fill out the form and create {""}
                    <span className="text-fuchsia-600"> a task</span>
                  </p>
                  <form
                    className="mt-10 gap-5"
                    noValidate
                    onSubmit={handleSubmit(handleData)}
                  >
                    <FormTask register={register} errors={errors} />
                    <input
                      type="submit"
                      value={"Save Task"}
                      className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors w-full"
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
