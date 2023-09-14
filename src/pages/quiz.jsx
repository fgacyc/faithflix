// import FillInBlanks from "@/pages/components/quiz/fill-in-blanks";
// import MultipleChoice from "@/pages/components/quiz/multiple-choice";
// import SingleChoice from "@/pages/components/quiz/single-choice";
// import TrueOrFalse from "@/pages/components/quiz/true-or-false";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export  default  function Quiz(){
    const fileContents = `# this is review title
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

### You can use Static Generation for many types of pages, including:

    * Marketing pages
    * Blog posts
    * E-commerce product listings
    * Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
        `

    return(
        <div className={"bg-[#141414] h-screen text-white"}>
            <ReactMarkdown
                components={{
                    h1: ({node, ...props}) => <h1 className={"text-2xl font-bold"} {...props} />,
                    h2: ({node, ...props}) => <h2 className={"text-xl font-bold"} {...props} />,
                    h3: ({node, ...props}) => <h3 className={"text-lg font-bold"} {...props} />,
                    h4: ({node, ...props}) => <h4 className={"text-base font-bold"} {...props} />,
                    h5: ({node, ...props}) => <h5 className={"text-sm font-bold"} {...props} />,
                    h6: ({node, ...props}) => <h6 className={"text-xs font-bold"} {...props} />,
                }}
                remarkPlugins={[remarkGfm]}
                children={fileContents}
                className={"mb-8"}
            ></ReactMarkdown>
        </div>
    )
}