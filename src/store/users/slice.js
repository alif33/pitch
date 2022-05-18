import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../utils/schema";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    ...userData,
  },

  reducers: {
    setContact: (state, action) => {
      const { name, email, phoneNumber, code, phoneCode } = action.payload;
      return {
        ...state,
        contactInfo: {
          name,
          email,
          phoneNumber,
          code,
          phoneCode,
        },
      };
    },
    setFoundersInfo: (state, action) => {
      const { founderName, founderRole, founderDiscerption, founderLinkedin } =
        action.payload;
      return {
        ...state,
        foundersInfo: {
          founderName,
          founderRole,
          founderDiscerption,
          founderLinkedin,
        },
      };
    },
    setCompanyInfo: (state, action) => {
      console.log(action.payload);

      const {
        projectDiscerption,
        teamBackground,
        facebook,
        instagram,
        linkedIn,
        discord,
        telegram,
        pitchDeckURL,
        tokenomicsFileURL,
        LogoURL,
        compayStage,
        selectState,
        companyWebsite,
        teamSize,
      } = action.payload;

      return {
        ...state,
        companyInfo: {
          projectDiscerption,
          teamBackground,
          companyWebsite,
          teamSize,
          socialsLink: {
            facebook,
            instagram,
            linkedIn,
            discord,
            telegram,
          },
          compayStage,
          selectState,
          pitchDeckURL,
          tokenomicsFileURL,
          LogoURL,
        },
      };
    },
    setMetricsInfo: (state, action) => {
      const { value, totalSupply, dilutedValuation, TGEMarketCap, symbolURL } =
        action.payload;
      // console.log()
      return {
        ...state,
        metricsInfo: {
          blockchainNetwork: value,
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
    setVideoPitch: (state, action) => {
      const { url } = action.payload;
      return {
        ...state,
        videoPitch: { url },
      };
    },

    usersReset: (state, action) => {
      return {
        ...userData,
      };
    },
  },
});
