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
import { ContractService } from "../contract.service";
import { ContractCreateInput } from "./ContractCreateInput";
import { Contract } from "./Contract";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractWhereUniqueInput } from "./ContractWhereUniqueInput";
import { ContractUpdateInput } from "./ContractUpdateInput";
import { ContractApprovalFindManyArgs } from "../../contractApproval/base/ContractApprovalFindManyArgs";
import { ContractApproval } from "../../contractApproval/base/ContractApproval";
import { ContractApprovalWhereUniqueInput } from "../../contractApproval/base/ContractApprovalWhereUniqueInput";
import { ContractPerformanceFindManyArgs } from "../../contractPerformance/base/ContractPerformanceFindManyArgs";
import { ContractPerformance } from "../../contractPerformance/base/ContractPerformance";
import { ContractPerformanceWhereUniqueInput } from "../../contractPerformance/base/ContractPerformanceWhereUniqueInput";
import { ContractQueryFindManyArgs } from "../../contractQuery/base/ContractQueryFindManyArgs";
import { ContractQuery } from "../../contractQuery/base/ContractQuery";
import { ContractQueryWhereUniqueInput } from "../../contractQuery/base/ContractQueryWhereUniqueInput";
import { ContractReminderFindManyArgs } from "../../contractReminder/base/ContractReminderFindManyArgs";
import { ContractReminder } from "../../contractReminder/base/ContractReminder";
import { ContractReminderWhereUniqueInput } from "../../contractReminder/base/ContractReminderWhereUniqueInput";
import { ContractVersionFindManyArgs } from "../../contractVersion/base/ContractVersionFindManyArgs";
import { ContractVersion } from "../../contractVersion/base/ContractVersion";
import { ContractVersionWhereUniqueInput } from "../../contractVersion/base/ContractVersionWhereUniqueInput";

export class ContractControllerBase {
  constructor(protected readonly service: ContractService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contract })
  async createContract(
    @common.Body() data: ContractCreateInput
  ): Promise<Contract> {
    return await this.service.createContract({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        template: true,
        title: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Contract] })
  @ApiNestedQuery(ContractFindManyArgs)
  async contracts(@common.Req() request: Request): Promise<Contract[]> {
    const args = plainToClass(ContractFindManyArgs, request.query);
    return this.service.contracts({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        template: true,
        title: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    const result = await this.service.contract({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        template: true,
        title: true,
        updatedAt: true,
        version: true,
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
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContract(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() data: ContractUpdateInput
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,
          template: true,
          title: true,
          updatedAt: true,
          version: true,
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
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,
          template: true,
          title: true,
          updatedAt: true,
          version: true,
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

  @common.Get("/:id/contractApprovals")
  @ApiNestedQuery(ContractApprovalFindManyArgs)
  async findContractApprovals(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<ContractApproval[]> {
    const query = plainToClass(ContractApprovalFindManyArgs, request.query);
    const results = await this.service.findContractApprovals(params.id, {
      ...query,
      select: {
        approvalDate: true,
        approver: true,

        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/contractApprovals")
  async connectContractApprovals(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractApprovalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractApprovals: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contractApprovals")
  async updateContractApprovals(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractApprovalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractApprovals: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contractApprovals")
  async disconnectContractApprovals(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractApprovalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractApprovals: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/contractPerformances")
  @ApiNestedQuery(ContractPerformanceFindManyArgs)
  async findContractPerformances(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<ContractPerformance[]> {
    const query = plainToClass(ContractPerformanceFindManyArgs, request.query);
    const results = await this.service.findContractPerformances(params.id, {
      ...query,
      select: {
        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        milestone: true,
        recordedDate: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/contractPerformances")
  async connectContractPerformances(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractPerformanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractPerformances: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contractPerformances")
  async updateContractPerformances(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractPerformanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractPerformances: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contractPerformances")
  async disconnectContractPerformances(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractPerformanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractPerformances: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/contractQueries")
  @ApiNestedQuery(ContractQueryFindManyArgs)
  async findContractQueries(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<ContractQuery[]> {
    const query = plainToClass(ContractQueryFindManyArgs, request.query);
    const results = await this.service.findContractQueries(params.id, {
      ...query,
      select: {
        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        criteria: true,
        id: true,
        queryDate: true,
        queryType: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/contractQueries")
  async connectContractQueries(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractQueryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractQueries: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contractQueries")
  async updateContractQueries(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractQueryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractQueries: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contractQueries")
  async disconnectContractQueries(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractQueryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractQueries: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/contractReminders")
  @ApiNestedQuery(ContractReminderFindManyArgs)
  async findContractReminders(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<ContractReminder[]> {
    const query = plainToClass(ContractReminderFindManyArgs, request.query);
    const results = await this.service.findContractReminders(params.id, {
      ...query,
      select: {
        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        message: true,
        reminderDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/contractReminders")
  async connectContractReminders(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractReminders: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contractReminders")
  async updateContractReminders(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractReminders: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contractReminders")
  async disconnectContractReminders(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractReminders: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/contractVersions")
  @ApiNestedQuery(ContractVersionFindManyArgs)
  async findContractVersions(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<ContractVersion[]> {
    const query = plainToClass(ContractVersionFindManyArgs, request.query);
    const results = await this.service.findContractVersions(params.id, {
      ...query,
      select: {
        changes: true,

        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        modificationDate: true,
        updatedAt: true,
        versionNumber: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/contractVersions")
  async connectContractVersions(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractVersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractVersions: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contractVersions")
  async updateContractVersions(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractVersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractVersions: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contractVersions")
  async disconnectContractVersions(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ContractVersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contractVersions: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }
}