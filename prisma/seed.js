// Prisma Setup -----------------------------------------------------------------
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Data -------------------------------------------------------------------------
const traits = [
];

const seeds = [ 
    { key: "answer", data: answers },
];

// Main -------------------------------------------------------------------------
async function main(){
    for(let seedObj of seeds){
        for(let data of seedObj.data){
            await prisma[seedObj.key].create({ data });
        }
    }
}

// Execute ----------------------------------------------------------------------
main().catch(e => {
    console.log(e);
    process.exit(1);
})
.finally(()=>{
    prisma.$disconnect();
})