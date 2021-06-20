import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard2 from './CoinCard2';

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.data.map((coin, index) => 
            <CoinCard2 
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={parseFloat(coin.priceUsd).toFixed(2)}
                percent_change_24h={parseFloat(coin.changePercent24Hr).toFixed(2)}
                rank={coin.rank}
            />
        ) 
    }


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching === false) {
            return (
                <ScrollView contentContainerStyle={contentContainer}>
                    {this.renderCoinCards()}
                </ScrollView>
            )
        } else {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }
        
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)