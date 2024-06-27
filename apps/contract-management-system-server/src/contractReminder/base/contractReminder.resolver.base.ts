/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ContractReminder } from "./ContractReminder";
import { ContractReminderCountArgs } from "./ContractReminderCountArgs";
import { ContractReminderFindManyArgs } from "./ContractReminderFindManyArgs";
import { ContractReminderFindUniqueArgs } from "./ContractReminderFindUniqueArgs";
import { CreateContractReminderArgs } from "./CreateContractReminderArgs";
import { UpdateContractReminderArgs } from "./UpdateContractReminderArgs";
import { DeleteContractReminderArgs } from "./DeleteContractReminderArgs";
import { Contract } from "../../contract/base/Contract";
import { ContractReminderService } from "../contractReminder.service";
@graphql.Resolver(() => ContractReminder)
export class ContractReminderResolverBase {
  constructor(protected readonly service: ContractReminderService) {}

  async _contractRemindersMeta(
    @graphql.Args() args: ContractReminderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ContractReminder])
  async contractReminders(
    @graphql.Args() args: ContractReminderFindManyArgs
  ): Promise<ContractReminder[]> {
    return this.service.contractReminders(args);
  }

  @graphql.Query(() => ContractReminder, { nullable: true })
  async contractReminder(
    @graphql.Args() args: ContractReminderFindUniqueArgs
  ): Promise<ContractReminder | null> {
    const result = await this.service.contractReminder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ContractReminder)
  async createContractReminder(
    @graphql.Args() args: CreateContractReminderArgs
  ): Promise<ContractReminder> {
    return await this.service.createContractReminder({
      ...args,
      data: {
        ...args.data,

        contract: args.data.contract
          ? {
              connect: args.data.contract,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ContractReminder)
  async updateContractReminder(
    @graphql.Args() args: UpdateContractReminderArgs
  ): Promise<ContractReminder | null> {
    try {
      return await this.service.updateContractReminder({
        ...args,
        data: {
          ...args.data,

          contract: args.data.contract
            ? {
                connect: args.data.contract,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ContractReminder)
  async deleteContractReminder(
    @graphql.Args() args: DeleteContractReminderArgs
  ): Promise<ContractReminder | null> {
    try {
      return await this.service.deleteContractReminder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Contract, {
    nullable: true,
    name: "contract",
  })
  async getContract(
    @graphql.Parent() parent: ContractReminder
  ): Promise<Contract | null> {
    const result = await this.service.getContract(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}