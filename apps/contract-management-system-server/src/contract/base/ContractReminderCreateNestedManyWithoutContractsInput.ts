/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ContractReminderWhereUniqueInput } from "../../contractReminder/base/ContractReminderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ContractReminderCreateNestedManyWithoutContractsInput {
  @Field(() => [ContractReminderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContractReminderWhereUniqueInput],
  })
  connect?: Array<ContractReminderWhereUniqueInput>;
}

export { ContractReminderCreateNestedManyWithoutContractsInput as ContractReminderCreateNestedManyWithoutContractsInput };
