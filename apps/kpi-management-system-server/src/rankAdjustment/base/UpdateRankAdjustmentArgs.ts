/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RankAdjustmentWhereUniqueInput } from "./RankAdjustmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RankAdjustmentUpdateInput } from "./RankAdjustmentUpdateInput";

@ArgsType()
class UpdateRankAdjustmentArgs {
  @ApiProperty({
    required: true,
    type: () => RankAdjustmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RankAdjustmentWhereUniqueInput)
  @Field(() => RankAdjustmentWhereUniqueInput, { nullable: false })
  where!: RankAdjustmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RankAdjustmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => RankAdjustmentUpdateInput)
  @Field(() => RankAdjustmentUpdateInput, { nullable: false })
  data!: RankAdjustmentUpdateInput;
}

export { UpdateRankAdjustmentArgs as UpdateRankAdjustmentArgs };
