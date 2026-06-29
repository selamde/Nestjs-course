import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser(@Query('name') name:string){
       const users= [
        {id:1, name:"Abebe"},
        {id:2, name: "Jhon"}
       ];

       if(name){
        return users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
       }
       return users
    }

    @Get(':id')
    getOneUser(@Param('id') id:string){
        return "one user" + id
    }

    @Post()
    createUser(@Body() body:any){
        return "user created" + body
    }

    @Put(':id')
    updateUser(){
        return "Updating user"
    }
    @Delete(':id')
    removeUser(){
        return "Removing the user"
    }

    
}
