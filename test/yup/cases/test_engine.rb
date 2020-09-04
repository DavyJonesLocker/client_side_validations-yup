# frozen_string_literal: true

require 'yup/cases/helper'

module ClientSideValidations
  module Yup
    class EngineTest < MiniTest::Test
      def test_client_side_form_js_hash
        assert defined?(ClientSideValidations::Yup::Engine)
      end
    end
  end
end
