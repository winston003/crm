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
import { KpiClassification } from "./KpiClassification";
import { KpiClassificationCountArgs } from "./KpiClassificationCountArgs";
import { KpiClassificationFindManyArgs } from "./KpiClassificationFindManyArgs";
import { Query } from "../../query/base/Query";
import { KpiClassificationFindUniqueArgs } from "./KpiClassificationFindUniqueArgs";
import { CreateKpiClassificationArgs } from "./CreateKpiClassificationArgs";
import { UpdateKpiClassificationArgs } from "./UpdateKpiClassificationArgs";
import { DeleteKpiClassificationArgs } from "./DeleteKpiClassificationArgs";
import { KpiClassificationService } from "../kpiClassification.service";
@graphql.Resolver(() => KpiClassification)
export class KpiClassificationResolverBase {
  constructor(protected readonly service: KpiClassificationService) {}

  async _kpiClassificationsMeta(
    @graphql.Args() args: KpiClassificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [KpiClassification])
  async kpiClassifications(
    @graphql.Args() args: KpiClassificationFindManyArgs
  ): Promise<KpiClassification[]> {
    return this.service.kpiClassifications(args);
  }

  @graphql.Query(() => KpiClassification, { nullable: true })
  async kpiClassification(
    @graphql.Args() args: KpiClassificationFindUniqueArgs
  ): Promise<KpiClassification | null> {
    const result = await this.service.kpiClassification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => KpiClassification)
  async createKpiClassification(
    @graphql.Args() args: CreateKpiClassificationArgs
  ): Promise<KpiClassification> {
    return await this.service.createKpiClassification({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => KpiClassification)
  async updateKpiClassification(
    @graphql.Args() args: UpdateKpiClassificationArgs
  ): Promise<KpiClassification | null> {
    try {
      return await this.service.updateKpiClassification({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => KpiClassification)
  async deleteKpiClassification(
    @graphql.Args() args: DeleteKpiClassificationArgs
  ): Promise<KpiClassification | null> {
    try {
      return await this.service.deleteKpiClassification(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
