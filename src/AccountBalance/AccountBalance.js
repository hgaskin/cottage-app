import React, { useState } from 'react';
import { StatLabel, StatNumber, StatHelpText, Stat, Button, ButtonGroup } from '@chakra-ui/react';

function AccountBalance() {
    const [accountBalance, setAccountBalance] = useState(0.00);


    function addMoney() {
        setAccountBalance(accountBalance + 1);
    }

    return (
        <div>
            <Stat>
                <StatLabel>My Account Balance</StatLabel>
                <StatNumber>${accountBalance}</StatNumber>
                <StatHelpText>add funds</StatHelpText>
                <ButtonGroup size="sm" isAttached variant="outline">
                <Button mr="-px">Save</Button>
                <Button colorScheme="blue" onClick={addMoney}>Add Funds</Button>
                </ButtonGroup>
                
            </Stat>
        </div>
    )
}

export default AccountBalance;
