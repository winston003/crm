/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RankAdjustmentListRelationFilter } from "../../rankAdjustment/base/RankAdjustmentListRelationFilter";
import { RankPromotionListRelationFilter } from "../../rankPromotion/base/RankPromotionListRelationFilter";

@InputType()
class RankWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RankAdjustmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RankAdjustmentListRelationFilter)
  @IsOptional()
  @Field(() => RankAdjustmentListRelationFilter, {
    nullable: true,
  })
  rankAdjustments?: RankAdjustmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RankPromotionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RankPromotionListRelationFilter)
  @IsOptional()
  @Field(() => RankPromotionListRelationFilter, {
    nullable: true,
  })
  rankPromotions?: RankPromotionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  requirements?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  responsibilities?: StringNullableFilter;
}

export { RankWhereInput as RankWhereInput };
