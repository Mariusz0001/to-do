import { getUserToken } from "@/app/lib/utils";
import { useEffect, useState } from "react";
import { Input } from "@/app/components/ui/input";
import axios from "axios";
import { useRouter } from "next/router";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { PRIORITY } from "@/app/lib/enums/priority";
import Loading from "./loading";
import { Button } from "@/app/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TaskDetails() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let id = router.query.id;
    if (id && id.length) {
      axios
        .get(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            process.env.NEXT_PUBLIC_PERSONALTASKS_URL +
            `/byId/${id}`,
          { headers: { Authorization: `Bearer ${getUserToken()}` } }
        )
        .then((response) => {
          setData(response.data);
        });
    }
  }, [router.isReady]);

  if (!data || isLoading) return <Loading />;

  const validate = (form) => {
    if (!form.name) {
      return "Name is required.";
    } else if (form.name.length < 2) {
      return "Name should be longer than 2 chars.";
    }
    if (!form.priority) {
      return "Priority is required.";
    }

    if (!form.status) {
      return "Status is required.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsLoading(true);

    let errorMsg = validate(data);
    setError(validate(data));

    if (errorMsg) {
      setIsLoading(false);
      return;
    }

    try {
      axios
        .post(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            process.env.NEXT_PUBLIC_PERSONALTASKS_URL +
            `/edit-details`,
          data,
          { headers: { Authorization: `Bearer ${getUserToken()}` } }
        )
        .then((response) => {
          setIsLoading(false);
          toast('🦄 Saved successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            theme: "dark",
            });
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response);
          } else if (error.request) {
            setError(error.request);
          } else {
            setError(error.toJSON());
          }
        });
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="lg:flex lg:flex-nowrap p-2">
        <div className="lg:basis-1/2 lg:mx-60 p-2">
          {error && <p className="text-red-400">{error}</p>}
          <div className="mb-4 lg:w-3/4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter task name"
            />
          </div>

          <div className="mb-4 lg:w-3/4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={data.description ? data.description : ""}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              placeholder="Enter task description"
            />
          </div>

          <div className="mb-4 lg:w-3/4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-600"
            >
              Status
            </label>

            <Select
              onValueChange={(value) => setData({ ...data, status: value })}
              defaultValue={data.status}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {BOARD_TYPE.map((type, index) => (
                  <SelectItem key={index} value={type.value}>
                    {type.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 lg:w-3/4">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-600"
            >
              Priority
            </label>
            <Select
              onValueChange={(value) => setData({ ...data, priority: value })}
              defaultValue={data.priority}
            >
              <SelectTrigger>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                {PRIORITY.map((type, index) => (
                  <SelectItem key={index} value={type.value}>
                    {type.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="lg:basis-1/2 mt-8 p-2">
          <div className="mb-4 lg:w-3/4">
            <label
              htmlFor="creationDate"
              className="block text-sm font-medium text-gray-600"
            >
              Creation date
            </label>
            <Input
              id="creationDate"
              name="creationDate"
              value={data.creationDate}
              disabled
              placeholder="2020.01.01"
            />
          </div>
          <div className="mb-4 lg:w-3/4">
            <label
              htmlFor="createdBy"
              className="block text-sm font-medium text-gray-600"
            >
              Created by
            </label>
            <Input
              id="createdBy"
              name="createdBy"
              value={data.createdBy}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="flex p-10 justify-center">
        <Button type="submit" className="w-[300px]" isLoading={isLoading}>
          Save
        </Button>
      </div>
      <ToastContainer />
    </form>
  );
}