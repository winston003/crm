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
import { Type } from "class-transformer";

@ArgsType()
class PerformanceAppraisalCountArgs {
  @ApiProperty({
    required: false,
    type: () => PerformanceAppraisalWhereInput,
  })
  @Field(() => PerformanceAppraisalWhereInput, { nullable: true })
  @Type(() => PerformanceAppraisalWhereInput)
  where?: PerformanceAppraisalWhereInput;
}

export { PerformanceAppraisalCountArgs as PerformanceAppraisalCountArgs };
