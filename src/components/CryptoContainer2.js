import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, AppState } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard2 from './CoinCard2';
import axios from 'axios';

function CryptoContainer() {
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'https://api.coincap.io/v2/assets?limit=10'
        //'https://api.github.com/users/hacktivist123/repos';
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          setAppState({ loading: false, repos: allRepos });
        });
    }, [setAppState]);

    if (!appState.loading) {
        if(appState.repos) {
            return appState.repos.data.map((coin, index) => {
                return (
                    <CoinCard2
                        key={index}
                        coin_name={coin.name}
                        symbol={coin.symbol}
                        price_usd={coin.priceUsd}
                        percentage_change_24h={coin.changePercent24Hr}
                    />
                )
            })
        } else {
            return <Text>Error</Text>
        }
    }
    if (appState.loading) {
        return(
            <>
                <Text>Loading Bitch</Text>
            </>
        );
    }
    

    /*componentDidMount() {
        this.props.FetchCoinData();
    }*/

    /*function renderCoinCards() {
        const { crypto } = this.props
        return (
            <Text>Container</Text>
        )
        return crypto.data.map((coin, index) => 
            <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
            />
        )
    }*/

    /*render() {
        const { crypto } = this.props
        if (crypto.isFetching === true) {
            return (
                <View>
                    <Spinner
                        visible={true}
                        textContent={"Loading ..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }
        return (
            <View>
                {renderCoinCards()}
            </View>
        )
    }*/
}

/*function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}*/

//export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
export default CryptoContainer