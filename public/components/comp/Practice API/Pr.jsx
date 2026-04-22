import React from "react"
import { useQueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getPost } from "./PrAPI";
import { getPostId } from "./PrAPI";
import { updtePost } from "./PrAPI";
import { deletePost, addPost } from "./PrAPI";
import { useState } from "react"


const Pr = () => {
    const queryClient = useQueryClient();
    const postMutation = useMutation({
        mutationFn: (payload) => updtePost(payload),
        onSuccess: (data) => {
            console.log(`Data :`, data)
            queryClient.invalidateQueries({ queryKey: ['posts'] })
            setForm({ id: '', title: '', body: '' });
        }
    })

    const [form, setForm] = useState({
        id: '',
        title: '',
        body: ''
    })
    const handlechange = (e) => {
        const { name, value } = e.target
        setForm((pre) => ({
            ...pre,
            [name]: value
        }))
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        postMutation.mutate(form)
        console.log(form)


    }


    return (
        <>
            <h1>Practice.. Api</h1>
            <div>
                <form onSubmit={handleUpdate}>

                    <input placeholder="Enter ID:" type="text" name="id" value={form.id} onChange={handlechange} />
                    <input placeholder="Title:" type="text" name="title" value={form.title} onChange={handlechange} />
                    <textarea placeholder="Body....." type="text" name="body" value={form.body} onChange={handlechange} />
                    <button type="submit">Get Data By Id</button>
                </form >



            </div>
        </>
    )
}
export default Pr;