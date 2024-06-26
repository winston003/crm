/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContractApproval } from "../../contractApproval/base/ContractApproval";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ContractPerformance } from "../../contractPerformance/base/ContractPerformance";
import { ContractQuery } from "../../contractQuery/base/ContractQuery";
import { ContractReminder } from "../../contractReminder/base/ContractReminder";
import { ContractVersion } from "../../contractVersion/base/ContractVersion";
import { EnumContractStatus } from "./EnumContractStatus";

@ObjectType()
class Contract {
  @ApiProperty({
    required: false,
    type: () => [ContractApproval],
  })
  @ValidateNested()
  @Type(() => ContractApproval)
  @IsOptional()
  contractApprovals?: Array<ContractApproval>;

  @ApiProperty({
    required: false,
    type: () => [ContractPerformance],
  })
  @ValidateNested()
  @Type(() => ContractPerformance)
  @IsOptional()
  contractPerformances?: Array<ContractPerformance>;

  @ApiProperty({
    required: false,
    type: () => [ContractQuery],
  })
  @ValidateNested()
  @Type(() => ContractQuery)
  @IsOptional()
  contractQueries?: Array<ContractQuery>;

  @ApiProperty({
    required: false,
    type: () => [ContractReminder],
  })
  @ValidateNested()
  @Type(() => ContractReminder)
  @IsOptional()
  contractReminders?: Array<ContractReminder>;

  @ApiProperty({
    required: false,
    type: () => [ContractVersion],
  })
  @ValidateNested()
  @Type(() => ContractVersion)
  @IsOptional()
  contractVersions?: Array<ContractVersion>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumContractStatus,
  })
  @IsEnum(EnumContractStatus)
  @IsOptional()
  @Field(() => EnumContractStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  template!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  version!: string | null;
}

export { Contract as Contract };
