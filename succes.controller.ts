import { Controller, Get } from '@nestjs/common';

@Controller('succes')
export class SuccesController {
    @Get()
    getAll(){
        return "Bonjour Controleur";
    }
}
