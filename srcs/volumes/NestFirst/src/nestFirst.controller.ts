import { Controller, Get, Post, Patch, Delete, Req, Param } from '@nestjs/common';
import { Request} from 'express';

@Controller()

export class nestFirstCtrl {

	@Get()
		getUsers() {
			return ('getUsers() from root');
		}
}
