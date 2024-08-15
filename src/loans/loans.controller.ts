import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('loans')
export class LoansController {
//    @Post()
//    createloan(@Body() createLoanDto: any){
//        return "loan created";
//    }

    @Post()
    createLoan(@Body() createLoanDto: any) {
        return `Loan created for ${createLoanDto.userId}`;
    }
    
    @Get(':id')
    getLoan(@Param('id') id: string){
        return `Status of loan ${id}`
    }

}
