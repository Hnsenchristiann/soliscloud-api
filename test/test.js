import assert from 'assert'
import station from '../api/station.js'

describe('Api', function() {
    describe('station', function() {
        it('calling userStationList', async function() {
            const response = await station.userStationList({})
            assert.equal(response.success, true)
        })
        it('calling stationDetail', async function() {
            const response = await station.stationDetail({id: "1298491919448679434"})
            assert.equal(response.success, true)
        })
        it('calling stationDay', async function() {
            const response = await station.stationDay({id: "1298491919448679434", money: "IDR", time: "2021-11-01", timeZone: "7"})
            assert.equal(response.success, true)
        })
        it('calling stationMonth', async function() {
            const response = await station.stationMonth({id: "1298491919448679434", money: "IDR", time: "2021-11"})
            assert.equal(response.success, true)
        })
        it('calling stationYear', async function() {
            const response = await station.stationYear({id: "1298491919448679434", money: "IDR", time: "2021"})
            assert.equal(response.success, true)
        })
        it('calling stationAll', async function() {
            const response = await station.stationAll({id: "1298491919448679434", money: "IDR"})
            assert.equal(response.success, true)
        })
        it('calling stationDetailList', async function() {
            const response = await station.stationDetailList({})
            assert.equal(response.success, true)
        })
        it('calling stationDayEnergyList', async function() {
            const response = await station.stationDayEnergyList({time: "2021-11-01"})
            assert.equal(response.success, true)
        })
        it('calling stationMonthEnergyList', async function() {
            const response = await station.stationMonthEnergyList({time: "2021-11"})
            assert.equal(response.success, true)
        })
        it('calling stationYearEnergyList', async function() {
            const response = await station.stationYearEnergyList({time: "2021"})
            assert.equal(response.success, true)
        })
    })

    describe('collector', function() {
        it('calling collectorList', async function() {
            const response = await station.collectorList({})
            assert.equal(response.success, true)
        })
        it('calling collectorDetail', async function() {
            const response = await station.collectorDetail({id: "306858901386768122"})
            assert.equal(response.success, true)
        })
    })

    describe('inverter', function() {
        it('calling inverterList', async function() {
            const response = await station.inverterList({})
            assert.equal(response.success, true)
        })
        it('calling inverterDetail', async function() {
            const response = await station.inverterDetail({id: "1308675217945954428"})
            assert.equal(response.success, true)
        })
        it('calling inverterDay', async function() {
            const response = await station.inverterDetail({id: "1308675217945954428", money: "IDR", time: "2021-11-01", timeZone: "7"})
            assert.equal(response.success, true)
        })
        it('calling inverterMonth', async function() {
            const response = await station.inverterMonth({id: "1308675217945954428", money: "IDR", month: "2021-11"})
            assert.equal(response.success, true)
        })
        it('calling inverterYear', async function() {
            const response = await station.inverterYear({id: "1308675217945954428", money: "IDR", year: "2021"})
            assert.equal(response.success, true)
        })
        it('calling inverterAll', async function() {
            const response = await station.inverterAll({id: "1308675217945954428", money: "IDR"})
            assert.equal(response.success, true)
        })
        it('calling inverterDetailList', async function() {
            const response = await station.inverterDetailList({})
            assert.equal(response.success, true)
        })
    })

    describe('alarm', function() {
        it('calling alarmList', async function() {
            const response = await station.alarmList({})
            assert.equal(response.success, true)
        })
    })
})