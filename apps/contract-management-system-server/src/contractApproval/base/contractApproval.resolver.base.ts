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
import { ContractApproval } from "./ContractApproval";
import { ContractApprovalCountArgs } from "./ContractApprovalCountArgs";
import { ContractApprovalFindManyArgs } from "./ContractApprovalFindManyArgs";
import { ContractApprovalFindUniqueArgs } from "./ContractApprovalFindUniqueArgs";
import { CreateContractApprovalArgs } from "./CreateContractApprovalArgs";
import { UpdateContractApprovalArgs } from "./UpdateContractApprovalArgs";
import { DeleteContractApprovalArgs } from "./DeleteContractApprovalArgs";
import { Contract } from "../../contract/base/Contract";
import { ContractApprovalService } from "../contractApproval.service";
@graphql.Resolver(() => ContractApproval)
export class ContractApprovalResolverBase {
  constructor(protected readonly service: ContractApprovalService) {}

  async _contractApprovalsMeta(
    @graphql.Args() args: ContractApprovalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ContractApproval])
  async contractApprovals(
    @graphql.Args() args: ContractApprovalFindManyArgs
  ): Promise<ContractApproval[]> {
    return this.service.contractApprovals(args);
  }

  @graphql.Query(() => ContractApproval, { nullable: true })
  async contractApproval(
    @graphql.Args() args: ContractApprovalFindUniqueArgs
  ): Promise<ContractApproval | null> {
    const result = await this.service.contractApproval(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ContractApproval)
  async createContractApproval(
    @graphql.Args() args: CreateContractApprovalArgs
  ): Promise<ContractApproval> {
    return await this.service.createContractApproval({
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

  @graphql.Mutation(() => ContractApproval)
  async updateContractApproval(
    @graphql.Args() args: UpdateContractApprovalArgs
  ): Promise<ContractApproval | null> {
    try {
      return await this.service.updateContractApproval({
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

  @graphql.Mutation(() => ContractApproval)
  async deleteContractApproval(
    @graphql.Args() args: DeleteContractApprovalArgs
  ): Promise<ContractApproval | null> {
    try {
      return await this.service.deleteContractApproval(args);
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
    @graphql.Parent() parent: ContractApproval
  ): Promise<Contract | null> {
    const result = await this.service.getContract(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
