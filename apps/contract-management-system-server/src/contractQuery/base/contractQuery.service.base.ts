/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ContractQuery as PrismaContractQuery,
  Contract as PrismaContract,
} from "@prisma/client";

export class ContractQueryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContractQueryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contractQuery.count(args);
  }

  async contractQueries(
    args: Prisma.ContractQueryFindManyArgs
  ): Promise<PrismaContractQuery[]> {
    return this.prisma.contractQuery.findMany(args);
  }
  async contractQuery(
    args: Prisma.ContractQueryFindUniqueArgs
  ): Promise<PrismaContractQuery | null> {
    return this.prisma.contractQuery.findUnique(args);
  }
  async createContractQuery(
    args: Prisma.ContractQueryCreateArgs
  ): Promise<PrismaContractQuery> {
    return this.prisma.contractQuery.create(args);
  }
  async updateContractQuery(
    args: Prisma.ContractQueryUpdateArgs
  ): Promise<PrismaContractQuery> {
    return this.prisma.contractQuery.update(args);
  }
  async deleteContractQuery(
    args: Prisma.ContractQueryDeleteArgs
  ): Promise<PrismaContractQuery> {
    return this.prisma.contractQuery.delete(args);
  }

  async getContract(parentId: string): Promise<PrismaContract | null> {
    return this.prisma.contractQuery
      .findUnique({
        where: { id: parentId },
      })
      .contract();
  }
}