import { StateGraph } from "@langchain/langgraph";
import { agentState } from "./state";
import { router } from "./router";
import { chatAgent } from "../agents/chat.agent";
import { searchAgent } from "../agents/search.agent";
import { codingAgent } from "../agents/coding.agent";
import { pdfAgent } from "../agents/pdf.agent";
import { pptAgent } from "../agents/ppt.agent";
import { imagegenAgent } from "../agents/imagegen.agent";


const workflow=new StateGraph(agentState)

workflow.addNode("router",router)
workflow.addNode("chat",chatAgent)
workflow.addNode("search",searchAgent)
workflow.addNode("coding",codingAgent)
workflow.addNode("pdf",pdfAgent)
workflow.addNode("ppt",pptAgent)
workflow.addNode("image",imagegenAgent)

workflow.addEdge("__start__","router") 
workflow.addConditionalEdges("router",(state)=>{
    switch(state.agent){
        case "chat":
            return "chat";

        case "search":
            return "search";
        case "coding":
            return "coding";
        case "pdf":
            return "pdf";
        case "ppt":
            return "ppt";
        case "image":
            return "image"                    

        default:
            return "chat";
    }
},{
    chat:"chat",
    search:"search",
    coding:"coding",
    pdf:"pdf",
    ppt:"ppt",
    image:"image"



})

workflow.addEdge("search","chat")

workflow.addEdge("chat","__end__")
workflow.addEdge("search","__end__")
workflow.addEdge("coding","__end__")
workflow.addEdge("pdf","__end__")
workflow.addEdge("ppt","__end__")
workflow.addEdge("image","__end__")
