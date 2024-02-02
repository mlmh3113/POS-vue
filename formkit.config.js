import { generateClasses } from "@formkit/themes"

const config = {
    config:{
        classes : generateClasses({
            global : {
                label : 'block font-bold text-lg', 
                message : 'text-red-500 font-semibold mb-2',
                wrapper : 'mb-3',
                input : 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
            },
            file : {
                noFiles : 'block my-2 text-sm text-gray-500',
                fileItem: 'hidden',
            },
            submit : {
                input:'w-full bg-green-500 text-white font-bold py-2 my-4 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',
            }
         
        })

    }
}

export default config