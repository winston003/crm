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
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RankWhereUniqueInput } from "../../rank/base/RankWhereUniqueInput";

@InputType()
class RankAdjustmentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  adjustmentReason?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  effectiveDate?: Date | null;

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
  rank?: RankWhereUniqueInput | null;
}

export { RankAdjustmentCreateInput as RankAdjustmentCreateInput };
