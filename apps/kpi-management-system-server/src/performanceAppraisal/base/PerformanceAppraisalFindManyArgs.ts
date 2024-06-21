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
import { PerformanceAppraisalWhereInput } from "./PerformanceAppraisalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PerformanceAppraisalOrderByInput } from "./PerformanceAppraisalOrderByInput";

@ArgsType()
class PerformanceAppraisalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PerformanceAppraisalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PerformanceAppraisalWhereInput, { nullable: true })
  @Type(() => PerformanceAppraisalWhereInput)
  where?: PerformanceAppraisalWhereInput;

  @ApiProperty({
    required: false,
    type: [PerformanceAppraisalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PerformanceAppraisalOrderByInput], { nullable: true })
  @Type(() => PerformanceAppraisalOrderByInput)
  orderBy?: Array<PerformanceAppraisalOrderByInput>;

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

export { PerformanceAppraisalFindManyArgs as PerformanceAppraisalFindManyArgs };
