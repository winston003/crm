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
import { ContractQueryCreateInput } from "./ContractQueryCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateContractQueryArgs {
  @ApiProperty({
    required: true,
    type: () => ContractQueryCreateInput,
  })
  @ValidateNested()
  @Type(() => ContractQueryCreateInput)
  @Field(() => ContractQueryCreateInput, { nullable: false })
  data!: ContractQueryCreateInput;
}

export { CreateContractQueryArgs as CreateContractQueryArgs };
