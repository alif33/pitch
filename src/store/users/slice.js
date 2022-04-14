import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../utils/schema";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    ...userData,
  },

  reducers: {
    setContact: (state, action) => {
      const { name, email, phoneNumber } = action.payload;
      return {
        ...state,
        contactInfo: {
          name,
          email,
          phoneNumber: phoneNumber,
        },
      };
    },
    setCompanyInfo: (state, action) => {
      const {
        projectDiscerption,
        teamBackground,
        facebook,
        instagram,
        linkedIn,
        discord,
        pitchDeckURL,
        tokenomicsFileURL,
        LogoURL,
      } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        companyInfo: {
          projectDiscerption,
          teamBackground,
          socialsLink: {
            facebook,
            instagram,
            linkedIn,
            discord,
          },
          pitchDeckURL,
          tokenomicsFileURL,
          LogoURL,
        },
      };
    },
    setMetricsInfo: (state, action) => {
      const {
        blockchainNetwork,
        totalSupply,
        dilutedValuation,
        TGEMarketCap,
        symbolURL,
      } = action.payload;
      return {
        ...state,
        metricsInfo: {
          blockchainNetwork,
          totalSupply,
          dilutedValuation,
          TGEMarketCap,
          symbolURL,
        },
      };
    },
    setListingInfo: (state, action) => {
      const {
        IDOSize,
        additionalPlatforms,
        pitchshowSize,
        dilutedValuation,
        tokenGenerationEven,
        listingPrice,
        pitchshowsAllocationSize,
        pitchshowsTokenPrice,
        IDOTimeFrame,
        vestingTermsURL,
        pitchshowsVestingTermsURL,
      } = action.payload;
      return {
        ...state,
        listingInfo: {
          IDOSize,
          additionalPlatforms,
          pitchshowSize,
          dilutedValuation,
          tokenGenerationEven,
          listingPrice,
          pitchshowsAllocationSize,
          pitchshowsTokenPrice,
          IDOTimeFrame,
          vestingTermsURL,
          pitchshowsVestingTermsURL,
        },
      };
    },
    setPartnersInfluencers: (state, action) => {
      const { topPartners, topInfluencers } = action.payload;
      return {
        ...state,
        partnersInfluencers: { topPartners, topInfluencers },
      };
    },
    setListingStrategy: (state, action) => {
      const { choiceTitleSelection, liquidity, marketMaker } = action.payload;
      return {
        ...state,
        listingStrategy: { choiceTitleSelection, liquidity, marketMaker },
      };
    },

    usersReset: (state, action) => {
      return {
        ...userData,
      };
    },
  },
});
