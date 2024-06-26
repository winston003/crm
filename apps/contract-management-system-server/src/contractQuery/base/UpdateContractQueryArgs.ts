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
import { ContractQueryWhereUniqueInput } from "./ContractQueryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContractQueryUpdateInput } from "./ContractQueryUpdateInput";

@ArgsType()
class UpdateContractQueryArgs {
  @ApiProperty({
    required: true,
    type: () => ContractQueryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractQueryWhereUniqueInput)
  @Field(() => ContractQueryWhereUniqueInput, { nullable: false })
  where!: ContractQueryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContractQueryUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContractQueryUpdateInput)
  @Field(() => ContractQueryUpdateInput, { nullable: false })
  data!: ContractQueryUpdateInput;
}

export { UpdateContractQueryArgs as UpdateContractQueryArgs };
