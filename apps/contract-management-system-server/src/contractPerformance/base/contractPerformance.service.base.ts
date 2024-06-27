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
  ContractPerformance as PrismaContractPerformance,
  Contract as PrismaContract,
} from "@prisma/client";

export class ContractPerformanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContractPerformanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contractPerformance.count(args);
  }

  async contractPerformances(
    args: Prisma.ContractPerformanceFindManyArgs
  ): Promise<PrismaContractPerformance[]> {
    return this.prisma.contractPerformance.findMany(args);
  }
  async contractPerformance(
    args: Prisma.ContractPerformanceFindUniqueArgs
  ): Promise<PrismaContractPerformance | null> {
    return this.prisma.contractPerformance.findUnique(args);
  }
  async createContractPerformance(
    args: Prisma.ContractPerformanceCreateArgs
  ): Promise<PrismaContractPerformance> {
    return this.prisma.contractPerformance.create(args);
  }
  async updateContractPerformance(
    args: Prisma.ContractPerformanceUpdateArgs
  ): Promise<PrismaContractPerformance> {
    return this.prisma.contractPerformance.update(args);
  }
  async deleteContractPerformance(
    args: Prisma.ContractPerformanceDeleteArgs
  ): Promise<PrismaContractPerformance> {
    return this.prisma.contractPerformance.delete(args);
  }

  async getContract(parentId: string): Promise<PrismaContract | null> {
    return this.prisma.contractPerformance
      .findUnique({
        where: { id: parentId },
      })
      .contract();
  }
}