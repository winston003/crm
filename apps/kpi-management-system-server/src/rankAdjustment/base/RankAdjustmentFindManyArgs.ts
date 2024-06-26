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
import { RankAdjustmentWhereInput } from "./RankAdjustmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RankAdjustmentOrderByInput } from "./RankAdjustmentOrderByInput";

@ArgsType()
class RankAdjustmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RankAdjustmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RankAdjustmentWhereInput, { nullable: true })
  @Type(() => RankAdjustmentWhereInput)
  where?: RankAdjustmentWhereInput;

  @ApiProperty({
    required: false,
    type: [RankAdjustmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RankAdjustmentOrderByInput], { nullable: true })
  @Type(() => RankAdjustmentOrderByInput)
  orderBy?: Array<RankAdjustmentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RankAdjustmentFindManyArgs as RankAdjustmentFindManyArgs };
