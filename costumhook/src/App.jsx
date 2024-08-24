import { useState } from 'react'
import { Button } from './components/ui/button'
import InputBox from './components/Input'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvert(amount)
        setAmount(convertedAmount)
    }

    const convertAmount = () => {
        setConvert(amount * currencyInfo[to])
    }


    return (
        <>
            <div
                className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://imgs.search.brave.com/_oRSylRQ4HUXgUtcQUHhIMFSJipx0j6yYEmcix_TSqU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnN0b2NrcGhvdG9z/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS9CdXkt/U3RvY2stUGhvdG9z/LTEwMjR4NTc2Lmpw/Zw')`,
                }}
            >
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10">
                        <form 
 handleSubmit = {(e) => {
        e.preventDefault()
        convertAmount()
    }}
    >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    CurrencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap}
                                >
                                    Swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    CurrencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
