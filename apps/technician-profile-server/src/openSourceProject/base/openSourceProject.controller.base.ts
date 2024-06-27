/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OpenSourceProjectService } from "../openSourceProject.service";
import { OpenSourceProjectCreateInput } from "./OpenSourceProjectCreateInput";
import { OpenSourceProject } from "./OpenSourceProject";
import { OpenSourceProjectFindManyArgs } from "./OpenSourceProjectFindManyArgs";
import { OpenSourceProjectWhereUniqueInput } from "./OpenSourceProjectWhereUniqueInput";
import { OpenSourceProjectUpdateInput } from "./OpenSourceProjectUpdateInput";

export class OpenSourceProjectControllerBase {
  constructor(protected readonly service: OpenSourceProjectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OpenSourceProject })
  async createOpenSourceProject(
    @common.Body() data: OpenSourceProjectCreateInput
  ): Promise<OpenSourceProject> {
    return await this.service.createOpenSourceProject({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        projectName: true,
        projectUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OpenSourceProject] })
  @ApiNestedQuery(OpenSourceProjectFindManyArgs)
  async openSourceProjects(
    @common.Req() request: Request
  ): Promise<OpenSourceProject[]> {
    const args = plainToClass(OpenSourceProjectFindManyArgs, request.query);
    return this.service.openSourceProjects({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        projectName: true,
        projectUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OpenSourceProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async openSourceProject(
    @common.Param() params: OpenSourceProjectWhereUniqueInput
  ): Promise<OpenSourceProject | null> {
    const result = await this.service.openSourceProject({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        projectName: true,
        projectUrl: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OpenSourceProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOpenSourceProject(
    @common.Param() params: OpenSourceProjectWhereUniqueInput,
    @common.Body() data: OpenSourceProjectUpdateInput
  ): Promise<OpenSourceProject | null> {
    try {
      return await this.service.updateOpenSourceProject({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          projectName: true,
          projectUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OpenSourceProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOpenSourceProject(
    @common.Param() params: OpenSourceProjectWhereUniqueInput
  ): Promise<OpenSourceProject | null> {
    try {
      return await this.service.deleteOpenSourceProject({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          projectName: true,
          projectUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}