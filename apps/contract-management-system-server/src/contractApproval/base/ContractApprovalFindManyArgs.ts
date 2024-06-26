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
import { ContractApprovalWhereInput } from "./ContractApprovalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContractApprovalOrderByInput } from "./ContractApprovalOrderByInput";

@ArgsType()
class ContractApprovalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContractApprovalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContractApprovalWhereInput, { nullable: true })
  @Type(() => ContractApprovalWhereInput)
  where?: ContractApprovalWhereInput;

  @ApiProperty({
    required: false,
    type: [ContractApprovalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContractApprovalOrderByInput], { nullable: true })
  @Type(() => ContractApprovalOrderByInput)
  orderBy?: Array<ContractApprovalOrderByInput>;

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

export { ContractApprovalFindManyArgs as ContractApprovalFindManyArgs };
