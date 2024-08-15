import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService {
    calculateLoanRisk(userProfile: any){
        // Lógica básica para determinar el riesgo
        if(userProfile.creditScore > 700){
            return "low Risk"
        }else{
            return "Hight Risk"
        }
    }
}
