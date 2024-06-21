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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumRankPromotionApprovalStatus } from "./EnumRankPromotionApprovalStatus";
import { StringFilter } from "../../util/StringFilter";
import { RankWhereUniqueInput } from "../../rank/base/RankWhereUniqueInput";

@InputType()
class RankPromotionWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  applicant?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  applicationDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumRankPromotionApprovalStatus,
  })
  @IsEnum(EnumRankPromotionApprovalStatus)
  @IsOptional()
  @Field(() => EnumRankPromotionApprovalStatus, {
    nullable: true,
  })
  approvalStatus?: "Option1";

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
    type: () => RankWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RankWhereUniqueInput)
  @IsOptional()
  @Field(() => RankWhereUniqueInput, {
    nullable: true,
  })
  rank?: RankWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  reviewCommittee?: StringNullableFilter;
}

export { RankPromotionWhereInput as RankPromotionWhereInput };
