/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ContractPerformanceWhereUniqueInput } from "../../contractPerformance/base/ContractPerformanceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ContractPerformanceUpdateManyWithoutContractsInput {
  @Field(() => [ContractPerformanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContractPerformanceWhereUniqueInput],
  })
  connect?: Array<ContractPerformanceWhereUniqueInput>;

  @Field(() => [ContractPerformanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContractPerformanceWhereUniqueInput],
  })
  disconnect?: Array<ContractPerformanceWhereUniqueInput>;

  @Field(() => [ContractPerformanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContractPerformanceWhereUniqueInput],
  })
  set?: Array<ContractPerformanceWhereUniqueInput>;
}

export { ContractPerformanceUpdateManyWithoutContractsInput as ContractPerformanceUpdateManyWithoutContractsInput };
