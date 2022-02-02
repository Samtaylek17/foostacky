import { useState, useEffect } from 'react';
import useSWR from 'swr';

const adminAddresses = {
	'0x394d5ab59e492eccb5560caf164cc559950b754f6f714605820106c28725861f': true,
};

export const handler = (web3, provider) => () => {
	const { data, mutate, ...rest } = useSWR(
		() => (web3 ? 'web3/accounts' : null),
		async () => {
			const accounts = await web3.eth.getAccounts();
			return accounts[0];
		}
	);

	// useEffect(() => {
	// 	const getAccount = async () => {
	// 		const accounts = await web3.eth.getAccounts();
	// 		setAccount(accounts[0]);
	// 	};

	// 	web3 && getAccount();
	// }, [web3]);

	useEffect(() => {
		provider && provider.on('accountsChanged', (accounts) => mutate(accounts[0] ?? null));
	}, [provider]);

	return { account: { data, isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false, mutate, ...rest } };
};
